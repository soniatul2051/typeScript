type EventType = 'click' | 'scroll' | 'mousemove';
type ExxludeEvent = Exclude<EventType, 'click'>;

const handleEvent = (event: ExxludeEvent) => {
    console.log(`Event type: ${event}`);
}

handleEvent('scroll');
// handleEvent('click');//it will not work because it in the excluded type