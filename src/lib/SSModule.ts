/**
 * Describe properties for a Silverstripe CMS module
 */
export type SSModule = {
  readonly name?: string;
  readonly repo: string;
  readonly core?: boolean;
  readonly supported?: boolean;
  readonly ss3Branch?: boolean;
  readonly ss4Branch?: boolean;
};
