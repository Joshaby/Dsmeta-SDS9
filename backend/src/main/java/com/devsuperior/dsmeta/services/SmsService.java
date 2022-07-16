package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Autowired
    private SaleRepository repository;

    @Value("${twilio.sid}")
    private String sid;

    @Value("${twilio.key}")
    private String key;

    @Value("${twilio.phone.from}")
    private String phoneFrom;

    @Value("${twilio.phone.to}")
    private String phoneTo;

    public void sendSms(Long id) {
        Sale sale = repository.findById(id).get();
        String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
        String text = new StringBuilder()
                .append("Vendedor: ")
                .append(sale.getSellerName())
                .append(" foi destaque em ")
                .append(date)
                .append(" com um total de ")
                .append(String.format("R$ %.2f", sale.getAmount()))
                .toString();
        Twilio.init(sid, key);
        PhoneNumber to = new PhoneNumber(phoneTo);
        PhoneNumber from = new PhoneNumber(phoneFrom);
        Message message = Message.creator(to, from, text).create();
        System.out.println(message.getSid());
    }
}
