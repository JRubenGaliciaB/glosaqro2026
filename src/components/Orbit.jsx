import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { COLORS } from "../data";
import Portrait from "./Portrait";
import { Pause, Play, RotateCcw } from "lucide-react";
export default function Orbit({ people, active, onHover, onOpen }) {
  const container = useRef(null),
    canvasHost = useRef(null),
    nodes = useRef(new Map()),
    pausedRef = useRef(false),
    hoverRef = useRef(false),
    phase = useRef(0);
  const [paused, setPaused] = useState(false),
    [hasLogo, setHasLogo] = useState(false),
    [webgl, setWebgl] = useState(true);
  const reduced = useRef(
    typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    const host = container.current,
      canvas = canvasHost.current;
    let renderer,
      raf,
      dead = false;
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 19);
    const disposables = [];
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      canvas.appendChild(renderer.domElement);
    } catch {
      setWebgl(false);
    }
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);
    for (const radius of [3.0, 4.65, 6.35]) {
      const geo = new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 181 }, (_, i) => {
          const a = (i / 180) * Math.PI * 2;
          return new THREE.Vector3(
            Math.cos(a) * radius,
            Math.sin(a) * radius * 0.72,
            0,
          );
        }),
      );
      const mat = new THREE.LineBasicMaterial({
        color: 0x33536d,
        transparent: true,
        opacity: 0.38,
      });
      ringGroup.add(new THREE.LineLoop(geo, mat));
      disposables.push(geo, mat);
    }
    const positions = [];
    // Deterministic star positions avoid flicker between mounts.
    for (let i = 0; i < 110; i++)
      positions.push(
        Math.sin(i * 127.1) * 10,
        Math.cos(i * 311.7) * 7,
        -3 - Math.abs(Math.sin(i)) * 3,
      );
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    const starsMat = new THREE.PointsMaterial({
      color: 0x7fa0ba,
      size: 0.025,
      transparent: true,
      opacity: 0.5,
    });
    scene.add(new THREE.Points(starsGeo, starsMat));
    disposables.push(starsGeo, starsMat);
    if (renderer)
      new THREE.TextureLoader().load(
        "/documentos/logoQHE.png",
        (texture) => {
          if (dead) {
            texture.dispose();
            return;
          }
          const material = new THREE.SpriteMaterial({
            map: texture,
            depthWrite: false,
            transparent: true,
          });
          const sprite = new THREE.Sprite(material),
            aspect = texture.image.width / texture.image.height;
          sprite.scale.set(8, 8 / aspect, 1);
          scene.add(sprite);
          disposables.push(texture, material);
          setHasLogo(true);
        },
        undefined,
        () => {},
      );
    let width = 1,
      height = 1;
    const resize = new ResizeObserver(() => {
      width = host.clientWidth;
      height = host.clientHeight;
      camera.aspect = width / height;
      camera.position.z = Math.max(
        19,
        7.6 / (Math.tan(Math.PI / 9) * camera.aspect),
      );
      camera.updateProjectionMatrix();
      renderer?.setSize(width, height);
    });
    resize.observe(host);
    const point = new THREE.Vector3();
    let previous = 0;
    const animate = (now) => {
      if (dead) return;
      const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
      previous = now;
      if (
        !pausedRef.current &&
        !hoverRef.current &&
        !reduced.current &&
        !document.hidden
      )
        phase.current += delta * 0.027;
      people.forEach((person, i) => {
        const ring = i % 3,
          slot = Math.floor(i / 3),
          count = Math.ceil((people.length - ring) / 3);
        const angle =
          (slot / Math.max(count, 1)) * Math.PI * 2 +
          ring * 0.68 +
          phase.current * (ring === 1 ? -0.65 : 1) -
          Math.PI / 2;
        const radius = [3, 4.65, 6.35][ring];
        point.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.72,
          Math.sin(angle + phase.current) * 0.6,
        );
        point.project(camera);
        const el = nodes.current.get(person.id);
        if (el) {
          el.style.left = `${(point.x * 0.5 + 0.5) * width}px`;
          el.style.top = `${(-point.y * 0.5 + 0.5) * height}px`;
        }
      });
      if (renderer && !document.hidden) renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    const lost = (e) => {
      e.preventDefault();
      setWebgl(false);
    };
    renderer?.domElement.addEventListener("webglcontextlost", lost);
    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      resize.disconnect();
      disposables.forEach((x) => x.dispose());
      renderer?.dispose();
      canvas.replaceChildren();
    };
  }, [people]);
  return (
    <section
      className="orbit"
      ref={container}
      aria-label="Mapa interactivo de dependencias"
    >
      <div ref={canvasHost} className="orbit-canvas" />
      <div className="orbit-vignette" />
      <div className={`core ${hasLogo ? "with-logo" : ""}`}>
        {!hasLogo && (
          <>
            <span className="core-q">
              Q<span>•</span>
            </span>
          </>
        )}
      </div>
      {people.map((p) => (
        <button
          key={p.id}
          ref={(el) =>
            el ? nodes.current.set(p.id, el) : nodes.current.delete(p.id)
          }
          style={{ "--accent": COLORS[p.axis] }}
          className={`orbital-person ${active === p.id ? "active" : ""}`}
          onMouseEnter={() => {
            hoverRef.current = true;
            onHover(p);
          }}
          onMouseLeave={() => {
            hoverRef.current = false;
          }}
          onFocus={() => {
            hoverRef.current = true;
            onHover(p);
          }}
          onBlur={() => {
            hoverRef.current = false;
          }}
          onClick={() => onOpen(p)}
          aria-label={`${p.name}, ${p.holder}. Ver comparecencia`}
        >
          <Portrait person={p} />
          <span className="orbital-label">{p.id}</span>
        </button>
      ))}
      <div className="orbit-caption">
        <span className="tiny-cross">+</span> EXPLORA LAS CONEXIONES
      </div>
      <div className="orbit-controls">
        <button
          onClick={() => setPaused((v) => !v)}
          aria-label={paused ? "Reanudar movimiento" : "Pausar movimiento"}
        >
          {paused ? <Play size={15} /> : <Pause size={15} />}
          <span>{paused ? "Reanudar" : "Pausar"}</span>
        </button>
        <button
          onClick={() => {
            phase.current = 0;
          }}
          aria-label="Restablecer posición"
        >
          <RotateCcw size={15} />
        </button>
      </div>
      {!webgl && (
        <div className="webgl-note">Vista simplificada · 3D no disponible</div>
      )}
    </section>
  );
}
