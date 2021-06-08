import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { makeAssetMaster } from "./store/toys";
// import homer from "./images/Homer.jpg";

function App() {
  const [selectedCollectionId, setSelectedCollectionId] = useState();

  const collections = useSelector((state) => state.toys[0]);
  const assets = useSelector((state) => state.toys[1]);
  const masterAssets = useSelector((state) => state.toys[2]);

  const dispatch = useDispatch();

  const collectionAssets = assets.filter(
    (asset) => asset.collectionId === selectedCollectionId
  );
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 flex items-center  flex-col ">
        <h3 className="font-semibold font-sans text-2xl mb-6">Collections</h3>
        <div className="flex items-center flex-col justify-center">
          {collections.map((collection) => (
            <button
              className="mb-10 border p-4 "
              key={collection.id}
              onClick={() => setSelectedCollectionId(collection.id)}
            >
              <img src={`/images/${collection.path}`} alt="W3Schools.com" />

              <h1 className="font-semibold text-gray-800">{collection.name}</h1>
            </button>
          ))}
        </div>
      </div>

      <div className="col-span-3 flex items-center  flex-col ">
        <h3 className="font-semibold font-sans text-2xl mb-6">Assets</h3>

        <div className="flex items-center flex-col justify-center">
          {" "}
          {collectionAssets.map((asset) => (
            <div key={asset.id} className="mb-10 border  p-4">
              <img src={`/images/${asset.path}`} alt="W3Schools.com" />
              <p>{asset.name}</p>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 flex "
                onClick={() =>
                  dispatch(
                    makeAssetMaster({
                      collectionId: selectedCollectionId,
                      asset,
                    })
                  )
                }
              >
                Make Master
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 flex items-center  flex-col ">
        <h3 className="font-semibold font-sans text-2xl mb-6">Master</h3>

        <div className="flex items-center justify-center">
          {" "}
          {masterAssets?.map((masterAsset) =>
            masterAsset.collectionId === selectedCollectionId ? (
              <div key={masterAsset?.asset?.name} className="border p-4">
                <img
                  src={`/images/${masterAsset.asset.path}`}
                  alt="W3Schools.com"
                />

                <p>{masterAsset?.asset?.name}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
