import classNames from "classnames";

interface H1Props {
    children: string
    className?: string
    isFaded?: boolean
    isOrange?: boolean
    isBold?: boolean
}

function H1({ children, className, isFaded, isOrange, isBold }: H1Props) {
    return (
      <h1
        className={classNames(
          'font-poppins',
          className,{
          'text-slate-500': !!isFaded,
          'text-amber-600': !!isOrange,
          'font-semibold': !!isBold
          }
        )}
      >
        {children}
      </h1>
    )
  }
  
  export default H1