class CompaniesController < ApplicationController
    def name
        company = Company.find_by_company_code(params[:company_id])
        render json: company, status: :ok
    end


end
