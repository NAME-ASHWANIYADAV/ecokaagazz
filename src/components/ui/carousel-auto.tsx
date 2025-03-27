
import { useEffect, useState } from "react";
import { Carousel as BaseCarousel, type CarouselApi } from "@/components/ui/carousel";

interface CarouselAutoProps extends React.ComponentProps<typeof BaseCarousel> {
  autoPlay?: boolean;
  interval?: number;
}

export function CarouselAuto({
  autoPlay = true,
  interval = 5000,
  opts,
  children,
  ...props
}: CarouselAutoProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!api || !autoPlay) return;
    
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, interval);
    
    console.log("Carousel autoplay enabled with interval:", interval);
    
    return () => {
      clearInterval(intervalId);
      console.log("Carousel autoplay interval cleared");
    };
  }, [api, autoPlay, interval]);
  
  useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      console.log("Current slide:", api.selectedScrollSnap());
    });
    
    return () => {
      api.off("select", () => {});
    };
  }, [api]);
  
  return (
    <BaseCarousel 
      opts={{ 
        loop: true,
        ...(opts || {})
      }} 
      setApi={setApi} 
      {...props}
    >
      {children}
    </BaseCarousel>
  );
}