import { useCounter } from "@/hooks/useCounter";
import { useInView } from "framer-motion";
import { useRef } from "react";

export  function AnimatedCounter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount:0.6});
    const count = useCounter({ target:45, duration:2000, start:isInView});

    return (
        <div ref={ref} className="animated-counter" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}

export function SantriPutra(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount:0.6});
    const count = useCounter({ target:25, duration:2000, start:isInView});

    return (
        <div ref={ref} className="santriputra" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}
export function SantriPutri(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount:0.6});
    const count = useCounter({ target:20, duration:2000, start:isInView});

    return (
        <div ref={ref} className="santriputri" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}
export function PengurusPutra(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount:0.6});
    const count = useCounter({ target:10, duration:2000, start:isInView});

    return (
        <div ref={ref} className="pengurusputra" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}
export function PengurusPutri(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount:0.6});
    const count = useCounter({ target:5, duration:2000, start:isInView});

    return (
        <div ref={ref} className="pengurusputri" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}