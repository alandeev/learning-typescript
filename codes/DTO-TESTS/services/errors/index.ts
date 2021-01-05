export function minLength(field: string, valueParam: number, ErrorMessage?: string): any {
  return function (): PropertyDescriptor | void {
    return {
      value: (data: any) => {
        const _value = data[field];
        if (!_value || _value.length < valueParam) {
          throw new Error(ErrorMessage || `length of ${data[field]} not is valid, minimium is ${valueParam}`);
        }
      },
    };
  };
}

export function maxLength(field: string, valueParam: number, ErrorMessage?: string): any {
  return function (): PropertyDescriptor | void {
    return {
      value: (data: any) => {
        const _value = data[field];
        if (!_value || _value.length > valueParam) {
          throw new Error(ErrorMessage || `length of ${data[field]} not is valid, minimium is ${valueParam}`);
        }
      },
    };
  };
}
