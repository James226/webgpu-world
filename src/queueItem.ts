export class QueueItem {
    items: GPUCommandBuffer[]
    callback: () => void
}