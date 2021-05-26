import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator';

export const GeneratorFactory  = (n: number) => {
    return (generator: GeneratorService) => generator.generate(n);
};

export const generatedString = new InjectionToken('generator');
