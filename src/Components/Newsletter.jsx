const Newsletter = () => {
  return (
    <div className="w-3/4 mx-auto border flex justify-center items-center space-y-3 p-10 flex-col bg-purple-600 text-white mt-20 shadow-2xl">
      <h1 className="text-3xl text-center font-extrabold">
        SUBSCRIBE TO OUR NEWSLETTER
      </h1>
      <input
        type="text"
        placeholder="Type your email"
        className="input input-bordered w-full text-center max-w-xs"
      />
      <button
        className="btn bg-white text-purple-600"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Subscribe
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-purple-600 text-4xl text-center">
            Congratulation
          </h3>
          <p className="py-4 text-black text-center">
            You have Subscribed to Newsletter
          </p>
          <div className="flex justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-purple-600 text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Newsletter;
