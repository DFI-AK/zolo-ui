import { AfterViewInit, Directive, ElementRef, HostListener, inject, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appScrollToEnd]',
  standalone: true
})
export class ScrollToEndDirective implements AfterViewInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newMessage']) {
      this.scrollToEnd();
    }
  }
  ngAfterViewInit(): void {
    this.scrollToEnd();
  }

  private elementRef = inject(ElementRef<HTMLDivElement>);

  @HostListener('div') onContentChange() {
    this.scrollToEnd();
  }

  private scrollToEnd() {
    const element = this.elementRef.nativeElement as HTMLDivElement;
    element.scrollTop = element.scrollHeight;
  }
}
