export default function StoreIcon({ type }: { type: 'android' | 'ios' }) {
  if (type === 'android') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 17V10M17 17V10M5.5 10H18.5M9 6L7.2 3.5M15 6L16.8 3.5M8 21V17M16 21V17M8 10V8.5C8 7.12 9.12 6 10.5 6H13.5C14.88 6 16 7.12 16 8.5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15.6 5.2C14.8 6.2 13.4 6.9 12.2 6.8C12 5.5 12.6 4.2 13.3 3.3C14.2 2.3 15.7 1.7 16.9 1.8C17 3.1 16.5 4.3 15.6 5.2ZM19.4 17.2C18.8 18.1 18.6 18.5 17.8 19.3C16.8 20.4 15.5 21.8 13.8 21.8C12.3 21.8 11.9 20.9 9.9 20.9C7.8 20.9 7.4 21.8 5.9 21.8C4.2 21.8 3 20.5 2 19.4C-0.8 16.3 -1 12.5 0.6 10.1C1.8 8.3 3.7 7.2 5.5 7.2C7.4 7.2 8.5 8.2 9.8 8.2C11 8.2 11.8 7.2 13.8 7.2C15.4 7.2 17.1 8 18.3 9.5C15 11.3 15.5 16.2 19.4 17.2Z" fill="currentColor" />
    </svg>
  )
}
