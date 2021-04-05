import { RePortal } from 'components'
import { FunctionComponent } from 'react'
import classnames from 'classnames'

export interface Props {
  isVisible: boolean
  onClose: () => void
  className?: string
}

const ReModal: FunctionComponent<Props> = ({
  isVisible,
  onClose,
  children,
  className
}) => {
  const onMaskClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  return (
    <RePortal elementId="modal-root">
      <div
        className={classnames('box-border', 'fixed', 'inset-0', {
          block: isVisible,
          hidden: !isVisible
        })}
        style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 10 }}
      />
      <div
        tabIndex={-1}
        className={classnames(
          'box-border',
          'fixed',
          'inset-0',
          'overflow-auto',
          'outline-0',
          {
            block: isVisible,
            hidden: !isVisible
          }
        )}
        style={{ zIndex: 20 }}
        onClick={onMaskClick}
      >
        <div
          tabIndex={0}
          style={{
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.5)',
            transform: 'translateY(-50%)'
          }}
          className={classnames(
            'box-border relative bg-gray-100 rounded max-w-2xl top-1/2 mx-auto my-0',
            className
          )}
        >
          {children}
        </div>
      </div>
    </RePortal>
  )
}

export default ReModal
