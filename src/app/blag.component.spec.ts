import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BlagAppComponent } from '../app/blag.component';

beforeEachProviders(() => [BlagAppComponent]);

describe('App: Blag', () => {
  it('should create the app',
      inject([BlagAppComponent], (app: BlagAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'blag works!\'',
      inject([BlagAppComponent], (app: BlagAppComponent) => {
    expect(app.title).toEqual('blag works!');
  }));
});
