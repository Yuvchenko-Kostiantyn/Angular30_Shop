import { GeneratorService } from './generator';

export const GeneratorFactory  = (n): string => {
    return new GeneratorService().generate(n);
};
