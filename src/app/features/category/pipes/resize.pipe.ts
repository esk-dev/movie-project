import { Pipe, PipeTransform } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { HttpService } from 'src/app/services/http/http.service';
import { BreakpointsService } from 'src/app/layout/services/breakpoints.service';
import { DomSanitizer } from '@angular/platform-browser';

export const LAYOUT_SHORT_TYPES_MAP = {
  [Breakpoints.Handset]: '320x520',
  [Breakpoints.Tablet]: '520x780',
  [Breakpoints.Web]: '820x1200',
};

@Pipe({
  name: 'resize',
})
export class ResizePipe implements PipeTransform {
  constructor(
    private httpService: HttpService,
    private breakPointsService: BreakpointsService,
    private sanitizer: DomSanitizer
  ) {
    this.breakPointsService.layoutType$.subscribe((breakPoint) => {
      this.size = LAYOUT_SHORT_TYPES_MAP[breakPoint];
      console.log(this.size);
    });
  }

  private size: string = '';

  private resizedImage: any;

  transform(imageUrl: string): string {
    this.httpService.resizeImage(this.size, imageUrl).subscribe((baseImage) => {
      const objectURL = URL.createObjectURL(baseImage);
      this.resizedImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
    console.log(this.resizedImage);
    return this.resizedImage;
  }
}
