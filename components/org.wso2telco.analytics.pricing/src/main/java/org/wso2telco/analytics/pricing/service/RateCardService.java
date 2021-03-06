package org.wso2telco.analytics.pricing.service;

import com.wso2telco.analytics.exception.DBUtilException;
import java.sql.Date;
import java.util.List;
import org.wso2telco.analytics.pricing.AnalyticsPricingException;
import org.wso2telco.analytics.pricing.Tax;
import org.wso2telco.analytics.pricing.service.dao.RateCardDAO;

public class RateCardService {

    public Object getNBRateCard(String operationId, String applicationId, String api,String category, String subCategory) throws AnalyticsPricingException, DBUtilException {
        RateCardDAO rateCardDAO = new RateCardDAOImpl();
        ChargeRate chargeRate = (ChargeRate) rateCardDAO.getNBRateCard(operationId, applicationId, api, category, subCategory);

        return chargeRate;
    }

    public Object getSBRateCard(String operator, String operation, String applicationId, String api, String category, String subCategory) throws AnalyticsPricingException, DBUtilException {
        RateCardDAO rateCardDAO = new RateCardDAOImpl();
        ChargeRate chargeRate = (ChargeRate) rateCardDAO.getSBRateCard(operator, operation, applicationId,api, category, subCategory);

        return chargeRate;
    }

    public List<Tax> getValidTaxRate(List<String> taxCode, Date taxDate) throws AnalyticsPricingException, DBUtilException {
        RateCardDAO rateCardDAO = new RateCardDAOImpl();
        List<Tax> validTaxVal = rateCardDAO.getValidTaxRate(taxCode, taxDate);

        return validTaxVal;
    }

    public void insertRateCard (ChargeRate chargeRate) throws AnalyticsPricingException, DBUtilException {
        RateCardDAO rateCardDAO = new RateCardDAOImpl();
        rateCardDAO.insertRateCard(chargeRate);
    }
}