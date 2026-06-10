export class CustomPC {
    public readonly cpu: string;
    public readonly memory: string;
    public readonly storage: string;
    public readonly gpu?: string | undefined;

    constructor(specs: { cpu: string; memory: string; storage: string; gpu?: string | undefined}) {
        this.cpu = specs.cpu;
        this.memory = specs.memory;
        this.storage = specs.storage;
        this.gpu = specs.gpu;
    }

    public showSpecs(): void {
        console.log('--- PC Specifications ---');
        console.log(`CPU:     ${this.cpu}`);
        console.log(`Memory:  ${this.memory}`);
        console.log(`Storage: ${this.storage}`);
        console.log(`GPU:     ${this.gpu ?? 'None (Integrated Graphics)'}`);
        console.log('-------------------------');
    }
}