import { CustomPC } from "../models/CustomPC.js";

export class PCBuilder {
    private cpu: string = '';
    private memory: string = '';
    private storage: string = '';
    private gpu?: string | undefined;

    public setCPU(cpu: string): this {
        this.cpu = cpu;
        return this;
    }

    public setMemory(memory: string): this {
        this.memory = memory;
        return this;
    }

    public setStorage(storage: string): this {
        this.storage = storage;
        return this;
    }

    public setGPU(gpu: string): this {
        this.gpu = gpu;
        return this;
    }

    public build(): CustomPC {
        if (!this.cpu || !this.memory || !this.storage) {
            throw new Error("CPU, memory, and storage are required");
        }

        return new CustomPC({
            cpu: this.cpu,
            memory: this.memory,
            storage: this.storage,
            gpu: this.gpu,
        });
    }
}