import { container } from  'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProviders from '@shared/container/providers/StorageProvider/implementations/DiskStorageProviders';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProviders,
);
