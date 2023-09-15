const PromoAlert = () => {
  return (
    <div className="border-adv-blue px-4 py-3 bg-adv-blue rounded-xl">
      <div className="flex justify-between items-center gap-4">
        <div className="border-pry-blue rounded-full h-8 w-8 flex justify-center items-center text-white text-sm bg-pry-blue p-3">
          %
        </div>

        <p className="text-sm">
          Save <span className="text-pry-blue font-normal">53%</span> and get <span className="text-pry-blue">6 extra Clarifision</span> for only <span className="text-pry-blue">$14 Each</span>.
        </p>
      </div>
      
    </div>
  )
}

export default PromoAlert