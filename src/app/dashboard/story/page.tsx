import ListStory from '@/modules/StoryPage/page';

export default async function Story() {
  return (
    <div className="p-2 relative">
      <ListStory />
      <div className="fixed bottom-10 right-10">
        <button className="bg-bgPrimaryTonalHover px-6 py-4 text-2xl rounded-full">
          <span className="text-black">+</span>
        </button>
      </div>
    </div>
  );
}
