import {
  closestCenter,
  DndContext,
  DragOverlay,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useMemoizedFn } from '@schema-render/core-react'
import type { FC, ReactNode } from 'react'
import { useState } from 'react'

type ISortCtx = ReturnType<typeof useSortable>

interface ISortableProps {
  items: Array<{ id: string; [key: string]: any }>
  itemClassName?: string
  overlayClassName?: string
  onChange?: (newItems: any[]) => void
  renderItem?: (item: any, index: number, sortCtx?: ISortCtx) => ReactNode
}

const Sortable: FC<ISortableProps> = ({
  items = [],
  onChange,
  itemClassName,
  overlayClassName,
  renderItem,
}) => {
  const sensors = useSensors(useSensor(MouseSensor))
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleDragEnd = useMemoizedFn(({ active, over }) => {
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = items.findIndex((item) => item.id === over.id)
      onChange?.(arrayMove(items, oldIndex, newIndex))
    }
    setActiveId(null)
  })

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => setActiveId(active.id as string)}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((record, index) => (
          <SortableItem
            className={itemClassName}
            key={record.id}
            id={record.id}
            itemData={record}
            itemIndex={index}
            renderItem={renderItem}
          />
        ))}
      </SortableContext>

      <DragOverlay zIndex={9999}>
        {activeId ? (
          <div className={overlayClassName}>
            {renderItem?.(
              items.find((item) => item.id === activeId),
              items.findIndex((item) => item.id === activeId)
            )}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

interface ISortableItemProps {
  className?: string
  id: string
  itemData: any
  itemIndex: number
  renderItem: ISortableProps['renderItem']
}

function SortableItem({
  className,
  id,
  itemData,
  itemIndex,
  renderItem,
}: ISortableItemProps) {
  const sortCtx = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(sortCtx.transform),
    transition: sortCtx.transition,
    opacity: sortCtx.isDragging ? 0 : undefined,
  }

  return (
    <div className={className} ref={sortCtx.setNodeRef} style={style}>
      {renderItem?.(itemData, itemIndex, sortCtx)}
    </div>
  )
}

export default Sortable
