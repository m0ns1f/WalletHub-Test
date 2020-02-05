import { TestBed, async, inject } from '@angular/core/testing';

import { IsNewsLettreSubscribGuard } from './is-news-lettre-subscrib.guard';

describe('IsNewsLettreSubscribGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsNewsLettreSubscribGuard]
    });
  });

  it('should ...', inject([IsNewsLettreSubscribGuard], (guard: IsNewsLettreSubscribGuard) => {
    expect(guard).toBeTruthy();
  }));
});
