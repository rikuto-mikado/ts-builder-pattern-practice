import { PCBuilder } from "./builders/PCBuilder.js";

const pcBuilder = new PCBuilder()
    .setCPU('Intel Core i9')
    .setMemory('32GB')
    .setStorage('2TB NVMe SSD')
    .setGPU('NVIDIA RTX 4080')
    .build();

console.log('Custom PC built successfully');
pcBuilder.showSpecs();


const officePC = new PCBuilder()
    .setCPU('AMD Ryzen 5')
    .setMemory('16GB')
    .setStorage('512GB SSD')
    .build();

console.log('Office PC built successfully');
officePC.showSpecs();
