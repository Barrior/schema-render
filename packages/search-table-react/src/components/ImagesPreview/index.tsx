import type { IObjectAny } from '@schema-render/core-react'
import { Image, Space } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'

interface IProps {
  imgList: string[]
  options: IObjectAny
}

const ImagesPreview: FC<IProps> = ({ imgList, options }) => {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  const openPreview = (index: number) => {
    setCurrent(index)
    setVisible(true)
  }

  return (
    <Image.PreviewGroup
      items={imgList}
      preview={{
        visible,
        current,
        onChange: (cur) => setCurrent(cur),
        onVisibleChange: (val) => setVisible(val),
      }}
    >
      <Space>
        {imgList.map((imgUrl, i) => (
          <Image
            width={60}
            {...options}
            src={imgUrl}
            key={i}
            onClick={() => openPreview(i)}
          />
        ))}
      </Space>
    </Image.PreviewGroup>
  )
}

export default ImagesPreview
