export interface ISelectProps {
  options: Array<string>
  id: string
  label: string
  value: string
  className: string
  onChange: (value: string) => void
}
