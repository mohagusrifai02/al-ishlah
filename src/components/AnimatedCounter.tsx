import { useCounter } from "@/hooks/useCounter";

export  function AnimatedCounter() {
    const count = useCounter({ target:45, duration:8500});

    return (
        <div className="animated-counter" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}

export function SantriPutra(){
    const count = useCounter({ target:25, duration:8500});

    return (
        <div className="santriputra" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}
export function SantriPutri(){
    const count = useCounter({ target:20, duration:8500});

    return (
        <div className="santriputri" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}
export function PengurusPutra(){
    const count = useCounter({ target:10, duration:8500});

    return (
        <div className="pengurusputra" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}
export function PengurusPutri(){
    const count = useCounter({ target:5, duration:8500});

    return (
        <div className="pengurusputri" style={{ fontSize:'100px', fontWeight:'700' }}>
            {count}
        </div>
    )
}