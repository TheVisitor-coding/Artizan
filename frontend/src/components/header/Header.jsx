import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import { AcmeLogo } from './Logo'
import { FaCartArrowDown } from 'react-icons/fa6'

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { state: { isLoggedIn }, logout } = useAuth()
  return (
    <>
      <Navbar className='my-4' onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className='font-bold text-inherit'>Artizan</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link href='/'>
              Accueil
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/artisans'>
              Artisans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/about'>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/services'>
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/contact'>
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        {
        isLoggedIn
          ? (
            <NavbarContent as='div' justify='end' className='flex flex-row gap-10 items-center'>
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='primary'
                    name='Jason Hughes'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  <DropdownItem key='profile' href='/profil'>
                    <p className='font-semibold'>Profil</p>
                  </DropdownItem>
                  <DropdownItem key='dashboard' variant='shadow' href='/dashboard'>
                    <p>Dashboard</p>
                  </DropdownItem>
                  <DropdownItem key='logout' color='danger' onPress={logout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <a href='/cart'>
                <FaCartArrowDown size='30px' color='#ac6b4a' className='hover:-translate-y-[2px] transition-all' />
              </a>
            </NavbarContent>
            )
          : (
            <NavbarContent justify='end'>
              <NavbarItem className='hidden lg:flex'>
                <Link href='/authentication'>Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color='primary' href='/authentication' variant='flat'>
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
            )
      }

        <NavbarMenu>
          <NavbarMenuItem>
            <Link Link href='/'>
              Accueil
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link Link href='/services'>
              Services
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link Link href='/about'>
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link Link href='/artisans'>
              Artisans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link Link href='/contact'>
              Contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

    </>
  )
}

export default Header
