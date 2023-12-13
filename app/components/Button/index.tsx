import type { VariantProps } from 'tailwind-variants'
// import type { ButtonProps } from '~/types/buttons'
import { Link } from '@remix-run/react'
import React from 'react'
import buttonStyles, { slots } from './styles'

type ButtonVariants = VariantProps<typeof buttonStyles>

export type ButtonProps = ButtonVariants & {
  href: string | undefined
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

const { buttonContainer } = slots()

const Button: React.FC<ButtonProps> = ({
  href,
  color = 'button-light',
  textStyle = undefined,
  children,
  className
}) => {
  const renderContent = () => {
    if (Array.isArray(children)) {
      return children.map((child, index) => renderChild(child, index))
    } else {
      return renderChild(children, 0)
    }
  }

  const renderChild = (child: React.ReactNode, index: number) => {
    if (typeof child === 'object' && React.isValidElement(child)) {
      return React.cloneElement(child, { key: index })
    } else if (typeof child === 'string') {
      return <span key={index} dangerouslySetInnerHTML={{ __html: child }} />
    } else {
      return null // Or handle other cases if necessary
    }
  }

  return (
    <Link
      to={href!}
      prefetch='intent'
      unstable_viewTransition
      className={`button ${buttonStyles({
        color: color,
        textStyle: textStyle
      })} ${className}`.trim()}
    >
      <div className={buttonContainer()}>{renderContent()}</div>
      {/* <div
        className={buttonContainer()}
        dangerouslySetInnerHTML={{ __html: renderContent()! }}
      ></div> */}
    </Link>
  )
}

export default Button
