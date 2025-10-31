import FuzzyText from '@/components/FuzzyText'
import React from 'react'

const Introduction = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-12 text-center">
      <div className="text-sm sm:text-base md:text-lg lg:text-xl">
        <FuzzyText baseIntensity={0.2}>
          *Giju (技術) + Han (販) = Innovation in Action.*
        </FuzzyText>
      </div>

      <div className="text-xs sm:text-sm md:text-base lg:text-lg">
        <FuzzyText baseIntensity={0.2}>
           
        </FuzzyText>
      </div>
    </div>
  )
}

export default Introduction