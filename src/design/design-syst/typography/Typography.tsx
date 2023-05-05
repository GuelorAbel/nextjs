import clsx from 'clsx'

// mon interface ici définit mon diesign système
interface Props {
      variant?: 
      "h1" | "h2" | "h3" | "h4" | "h5" | "p" ;
      component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" ;
      color?: "black" | "white" | "primary" | "secondary" | "gray";
      weight?: "regular" | "medium";
      className?: string;
      children: React.ReactNode;
}

export default function Typography({

      variant = "h3", children, component: Component = "p",
      className,
      color= "black",
}:Props) {
      // les diiférents cas
      let variantStyles: string = "", 
      colorStyles: string = "";
      switch(variant) {
            case "h1":
                  variantStyles = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  break;
            case "h2":
                  variantStyles = "text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                  break;
            case "h3":
                  variantStyles = "text-3xl md:text-4xl lg:text-5xl"
                  break;
            case "h4":
                  variantStyles = "text-2xl md:text-3xl lg:text-4xl"
                  break;
            case "h5":
                  variantStyles = "text-xl md:text-2xl text-3xl"
                  break;
            case "p":
                  variantStyles = "text-base md:text-lg lg:text-xl"
                  break;
      }
      switch(color) {
            case "black":
                  colorStyles = "text-[#111827]";
                  break;
            case 'white':
                  colorStyles = "text-[#ffffff]";
                  break;
            case 'primary':
                  colorStyles = "text-[]";
                  break;
            case 'secondary':
                  colorStyles = "text-[]";
                  break;
            case 'gray':
                  colorStyles = "text-[]";
                  break;
            
      }

      return (
            // rendu navigateur
            <Component className={clsx(variantStyles, className, color)}>
                  {children}
            </Component>
      )
}