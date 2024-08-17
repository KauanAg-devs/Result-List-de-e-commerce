import { Injectable } from '@nestjs/common';

@Injectable()
export class SkuService {
  generateSku(productName: string, color?: string, size?: string): string {
    const timestamp = new Date().getTime().toString(36);
    const normalizedProductName = productName
      .replace(/\s+/g, '-')
      .toUpperCase();

    if (color && size) {
      const normalizedColor = color.replace(/\s+/g, '-').toUpperCase();
      const normalizedSize = size.toUpperCase();
      return `SKU-${normalizedProductName}-${normalizedColor}-${normalizedSize}-${timestamp}`;
    }
    return `SKU-${normalizedProductName}-${timestamp}`;
  }
}
