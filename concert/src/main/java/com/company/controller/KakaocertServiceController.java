package com.company.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.barocert.BarocertException;
import com.barocert.kakaocert.KakaocertService;
import com.barocert.kakaocert.identity.Identity;
import com.barocert.kakaocert.identity.IdentityReceipt;
import com.barocert.kakaocert.identity.IdentityResult;
import com.barocert.kakaocert.identity.IdentityStatus;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class KakaocertServiceController {

	@Autowired
	private KakaocertService kakaocertService;

	// 이용기관 코드
	// 파트너가 등록한 이용기관의 코드, (파트너 사이트에서 확인가능)
	@Value("${kakaocert.clientCode}")
	private String ClientCode;
	
	/*
	 * 카카오톡 이용자에게 본인인증을 요청합니다.
	 * https://developers.barocert.com/reference/kakao/java/identity/api#RequestIdentity
	 */
	@RequestMapping(value = "kakaocert/requestIdentity", method = RequestMethod.GET)
	public String requestIdentity(Model m) throws BarocertException {

		// 본인인증 요청 정보 객체
		Identity identity = new Identity();

		// 수신자 휴대폰번호 - 11자 (하이픈 제외)
		identity.setReceiverHP(kakaocertService.encrypt("01012341234"));
		// 수신자 성명 - 80자
		identity.setReceiverName(kakaocertService.encrypt("홍길동"));
		// 수신자 생년월일 - 8자 (yyyyMMdd)
		identity.setReceiverBirthday(kakaocertService.encrypt("19700101"));

		// 인증요청 메시지 제목 - 최대 40자
		identity.setReqTitle("본인인증 요청 메시지 제목");
		// 커스텀 메시지 - 최대 500자
		identity.setExtraMessage(kakaocertService.encrypt("본인인증 커스텀 메시지"));
		// 인증요청 만료시간 - 최대 1,000(초)까지 입력 가능
		identity.setExpireIn(1000);
		// 서명 원문 - 최대 40자 까지 입력가능
		identity.setToken(kakaocertService.encrypt("본인인증 요청 원문"));

		// AppToApp 인증요청 여부
		// true - AppToApp 인증방식, false - Talk Message 인증방식
		identity.setAppUseYN(false);


		try {
			IdentityReceipt result = kakaocertService.requestIdentity(ClientCode, identity);
			m.addAttribute("result", result);
		} catch (BarocertException ke) {
			m.addAttribute("Exception", ke);
			log.error(ke.getMessage());
			return "exception";
		}

		return "response";
	}
}