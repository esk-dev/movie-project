import { IProvider } from './provider.interface';

export abstract class AbstractProvider implements IProvider {
  abstract searchURN: string;

  abstract infoURN: string;

  abstract availableServersURN: string;

  abstract streamingLinks: string;
}
