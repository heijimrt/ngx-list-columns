import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should find value by regex', () => {
    const value = [
        { label: 'Marta Silva', value: 1  },
        { label: 'Martirio', value: 2  },
        { label: 'Amar', value: 3  },
        { label: 'Tamar', value: 4  },
    ];
    expect(pipe.transform(value, 'amar')).toEqual(value);
  });
});
