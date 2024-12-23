import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {

  @Prop() 
  public text: string = "";

  @Event()
  public btnClickEventEmitter: EventEmitter;

  public buttonClicked(event: MouseEvent) {
      console.log("event: ", event);
      this.btnClickEventEmitter.emit();
  }

  render() {
    return <button onClick={(event: MouseEvent) => this.buttonClicked(event)}>{this.text}</button>;
  }
}
