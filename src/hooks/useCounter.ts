import { useEffect, useState } from "react";

interface CounterOptions{
    target: number;
    duration?:number;
    interval?:number;
    start?:boolean;
}

export function useCounter({target, duration=1000, interval=100, start=false}: CounterOptions){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        if(!start) return;

        let current = 0;
        const step = (target / (duration / interval));

        const timer = setInterval(()=>{
            current += step;
            if(current >= target){
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(current));
            }
        }, interval);

        return () => clearInterval(timer);
    }, [start, target, duration, interval]);

    return count;
}