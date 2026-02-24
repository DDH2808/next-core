import BaseInputNumber from '@/components/base/BaseInput/components/BaseInputNumber';
import BaseInputPassword from '@/components/base/BaseInput/components/BaseInputPassword';
import BaseInputText from '@/components/base/BaseInput/components/BaseInputText';
import {
  BaseInputNumberProps,
  BaseInputPasswordProps,
  BaseInputProps,
  BaseInputTextProps,
} from '@/components/base/BaseInput/type';

/**
 *
 * ```
 * const [value, setValue] = useState<any>(undefined);
 * ...
 * ```
 * @example
 * <BaseInput
 *   placeholder="This is placeholder!"
 *   onChange={value => setValue(value)}
 *   type="text"
 *   prefixIcon={style => <IconCheck style={style} />}
 *   suffixIcon={() => 'unit'}
 *   className="!w-full"
 *   value={currentValue}
 * />
 *
 * @example
 * <BaseInput
 *   type="number"
 *   defaultValue={1}
 *   showSpinner={false}
 *   onChange={value => setValue(value)}
 *   className="!w-full"
 * />
 *
 * @example
 * <BaseInput
 *   type="number"
 *   defaultValue={10000}
 *   showSpinner={false}
 *   formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
 *   parser={value => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
 *   className="!w-full"
 * />
 *
 * @example
 * <BaseInput
 *   type="password"
 *   defaultValue="this is secret"
 *   onChange={value => console.log(value)}
 *   className="!w-full"
 * />
 */
function BaseInput(props: BaseInputProps) {
  const { type = 'text' } = props;

  const baseClassName =
    'BaseInput h-10 !rounded-[5px] !pr-3 !pl-[15px] !text-base !border-iron-200 focus:!border-blue-main-400 focus-within:!border-blue-main-400 min-w-fit';

  if (type === 'number') {
    return (
      <BaseInputNumber
        {...(props as BaseInputNumberProps)}
        baseClassName={baseClassName}
      />
    );
  }

  if (type === 'password') {
    return (
      <BaseInputPassword
        {...(props as BaseInputPasswordProps)}
        baseClassName={baseClassName}
      />
    );
  }

  return (
    <BaseInputText
      {...(props as BaseInputTextProps)}
      baseClassName={baseClassName}
    />
  );
}

export default BaseInput;
