import * as React from 'react';
import { styled } from '@mui/system';

const ImageContainerComponent = styled('div')({
    width: '100%',
    position:'unset !important'
    '.image':{'object-fit':'contain',
width: '100% !important',
position: 'relative !important',
height:'unset !important'}
});

export default function ImageContainer({children}:{children:any}) {
  return <ImageContainerComponent>{children}</ImageContainerComponent>;
}