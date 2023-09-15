const PromoAlert = () => {
  return (
    <div className="mx-2.5 border-sec-blue px-3 py-4 bg-sec-blue rounded-md flex justify-start items-center gap-4 p-3">
      <div className="bg-white">
        <p className="border-pry-blue rounded-full h-6 w-6 flex justify-center items-center text-white text-sm bg-pry-blue">
          %
        </p>

        <p className="text-sm">
          Save <span className="text-pry-blue">53%</span> and get <span className="text-pry-blue">6 extra Clarifision</span> for only <span className="text-pry-blue">$14 Each</span>.
        </p>
      </div>
      
    </div>
  )
}

export default PromoAlert