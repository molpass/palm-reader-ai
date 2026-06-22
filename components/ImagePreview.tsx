import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImagePreviewProps {
  imageUrl: string | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <AspectRatio ratio={16 / 9}>
          {imageUrl ? (
            <img src={imageUrl} alt="업로드된 손바닥" className="rounded-md object-contain w-full h-full" />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-muted">
              <p className="text-muted-foreground">시작하려면 이미지를 업로드하세요</p>
            </div>
          )}
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default ImagePreview;