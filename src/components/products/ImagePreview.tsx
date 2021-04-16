import React from 'react';

type Props = {
  delete: any;
  path: string;
  id: string;
};

const ImagePreview: React.FC<Props> = (props: any) => {
  return (
    <div className="p-media__thumb" onClick={() => props.delete(props.id)}>
      <img src={props.path} alt="プレビュー画像" />
    </div>
  );
};

export default ImagePreview;
