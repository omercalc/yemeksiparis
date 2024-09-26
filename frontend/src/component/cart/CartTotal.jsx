

const CartTotal = () => {
  return (
    <div className="container mx-auto pt-21 pb-24 py-10">
      <div className="flex flex-wrap">
        {/* table-responsive */}
        <div className="w-full overflow-x-auto mb-22">
          {/* cartTable */}
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Product</th>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Price</th>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Quantity</th>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle">
                <td className="flex items-center border-t-0 border-b px-0 py-6">
                  <div className="w-16 h-20">
                    <img src="http://placehold.it/70x80" alt="image description" className="w-full h-full object-cover" />
                  </div>
                  <span className="pl-2"><a href="shop-detail.html">Pellentesque aliquet</a></span>
                </td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $</td>
                <td className="border-t-0 border-b px-0 py-6"><input type="number" placeholder="1" className="w-full border rounded" /></td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
              </tr>
              <tr className="align-middle">
                <td className="flex items-center border-t-0 border-b px-0 py-6">
                  <div className="w-16 h-20">
                    <img src="http://placehold.it/70x80" alt="image description" className="w-full h-full object-cover" />
                  </div>
                  <span className="pl-2"><a href="shop-detail.html">Neque Porro Quisquam</a></span>
                </td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $</td>
                <td className="border-t-0 border-b px-0 py-6"><input type="number" placeholder="1" className="w-full border rounded" /></td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
              </tr>
              <tr className="align-middle">
                <td className="flex items-center border-t-0 border-b px-0 py-6">
                  <div className="w-16 h-20">
                    <img src="http://placehold.it/70x80" alt="image description" className="w-full h-full object-cover" />
                  </div>
                  <span className="pl-2"><a href="shop-detail.html">Aliquam Quaerat Voluptem</a></span>
                </td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $</td>
                <td className="border-t-0 border-b px-0 py-6"><input type="number" placeholder="1" className="w-full border rounded" /></td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
              </tr>
              <tr className="align-middle">
                <td className="flex items-center border-t-0 border-b px-0 py-6">
                  <div className="w-16 h-20">
                    <img src="http://placehold.it/70x80" alt="image description" className="w-full h-full object-cover" />
                  </div>
                  <span className="pl-2"><a href="shop-detail.html">Pellentesque aliquet</a></span>
                </td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $</td>
                <td className="border-t-0 border-b px-0 py-6"><input type="number" placeholder="1" className="w-full border rounded" /></td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
              </tr>
              <tr className="align-middle">
                <td className="flex items-center border-t-0 border-b px-0 py-6">
                  <div className="w-16 h-20">
                    <img src="http://placehold.it/70x80" alt="image description" className="w-full h-full object-cover" />
                  </div>
                  <span className="pl-2"><a href="shop-detail.html">Sint Incidunt Utlabore</a></span>
                </td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $</td>
                <td className="border-t-0 border-b px-0 py-6"><input type="number" placeholder="1" className="w-full border rounded" /></td>
                <td className="font-bold border-t-0 border-b px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <form action="javascript:void(0);" className="mb-5">
            <div className="mb-0">
              <label htmlFor="note" className="font-bold uppercase block mb-1">Add Note</label>
              <textarea id="note" className="w-full border rounded p-2"></textarea>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <form action="javascript:void(0);" className="mb-5 md:mb-0">
            <fieldset>
              <div className="inline-block align-bottom mr-5 mb-2 md:mb-0">
                <label htmlFor="code" className="font-bold uppercase block mb-1">Promo Code</label>
                <input type="text" id="code" className="w-full border rounded p-2" />
              </div>
              <button type="submit" className="btn bg-blue-500 text-white font-bold uppercase rounded py-3 px-4 hover:bg-blue-700">Apply</button>
            </fieldset>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-between">
            <strong className="font-bold uppercase mb-1">Subtotal</strong>
            <strong className="font-bold uppercase mb-1">900.00 $</strong>
          </div>
          <a href="javascript:void(0);" className="btn bg-blue-500 text-white font-bold uppercase w-full rounded py-3 px-4 hover:bg-blue-700 text-center">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;