import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-name',
  templateUrl: './object-detection.component.html',
  styleUrls: ['./object-detection.component.scss']
})
export class ObjectDetectionComponent implements OnInit {
  @ViewChild('video', { static: true }) public video: ElementRef;
  @ViewChild('canvas', { static: true }) public canvas: ElementRef;

  private model: cocoSsd.ObjectDetection;
  private recyclableItems: string[] = ['bottle', 'cardboard', 'paper', 'plastic']; // Add more items as needed

  async ngOnInit() {
    console.log = () => {};
    console.error = () => {};
    console.warn = () => {};

    this.video.nativeElement.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
    this.video.nativeElement.play();

    this.model = await cocoSsd.load();
    this.detectFrame(this.video.nativeElement, this.model);
  }

  detectFrame(video: HTMLVideoElement, model: cocoSsd.ObjectDetection) {
    model.detect(video).then(predictions => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  }

  renderPredictions(predictions) {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction['bbox'];
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      const text = prediction['class'];
      const isRecyclable = this.recyclableItems.includes(text.toLowerCase());
      const label = `${text} - ${isRecyclable ? 'Recyclable' : 'Not Recyclable'}`;

      this.drawLabel(ctx, label, x, y);
    });
  }

  drawLabel(ctx, text, x, y) {
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.fillStyle = "#00FFFF";
    const textWidth = ctx.measureText(text).width;
    const textHeight = parseInt(font, 10); // base 10
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

    ctx.fillStyle = "#000000";
    ctx.fillText(text, x, y);
  }
  
}