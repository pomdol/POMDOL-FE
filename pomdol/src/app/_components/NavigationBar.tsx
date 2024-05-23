'use client';

import { styled } from 'styled-components';
import Link from 'next/link';
import { useWindowSize } from '../_context/WindowSizeContext';

export default function NavigationBar() {
  const { device } = useWindowSize();

  return (
    <Nav>
      <LeftNav>
        <Link href="/">
          <Logo>
            <img src="/images/symbol-logo.png" width={30} height={30} alt="pomdol symbol logo" />
            <img src="/images/text-logo.svg" height={16} alt="pomdol text logo" />
          </Logo>
        </Link>
        {device === 'mobile' ? null : (
          <Menu>
            <Link href="/">홈</Link>
            <Link href="/scheduler">스케줄러</Link>
            <Link href="/group">그룹</Link>
          </Menu>
        )}
      </LeftNav>
      <Menu>
        {device === 'mobile' ? null : (
          <>
            <Link href="/setting">설정</Link>
            <Link href="/report/day">통계</Link>
          </>
        )}
        <Link href="/user/login">로그인</Link>
      </Menu>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 40px;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.body2};
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 5px;
`;
