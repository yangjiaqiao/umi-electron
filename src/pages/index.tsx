import { Button } from 'antd';

export default function HomePage() {
  return (
    <div>
      <Button type="primary">最小化</Button>
      <h2 className="text-red-500">Yay! Welcome to umi with electron!</h2>
      <button
        className="h-20 w-200 text-white mr-5"
        onClick={async () => {
          window.alert(await window.$api.getPlatform());
        }}
      >
        what is my platform?
      </button>
    </div>
  );
}
