
import { bookWriterVersions } from './bookWriterVersions';
import { interactiveVersions } from './interactiveVersions';
import { specializedVersions } from './specializedVersions';
import { Version } from '../versionInterface';

// Combine all versions
export const versions: Version[] = [
  ...bookWriterVersions,
  ...interactiveVersions,
  ...specializedVersions
];

// Export individual category arrays for more granular access
export { bookWriterVersions, interactiveVersions, specializedVersions };
