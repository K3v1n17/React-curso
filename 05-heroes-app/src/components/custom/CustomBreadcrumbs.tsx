import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '../ui/breadcrumb'
import { Link } from 'react-router'

interface Breadcrumb {
    label: string;
    to: string;

}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
    return (
        <Breadcrumb className='my-5'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">
                            Inicio
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                {breadcrumbs.map((crumb, index) => (
                    <BreadcrumbItem key={`${crumb.to}-${index}`}>
                        <BreadcrumbLink asChild>
                            <Link to={crumb.to}>
                                {crumb.label}
                            </Link>
                        </BreadcrumbLink>
                        <BreadcrumbSeparator />
                    </BreadcrumbItem>
                ))}


                {/* {breadcrumbs.map(
                    (crumb) => (
                        <div key={crumb.to}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={crumb.to}>
                                        {crumb.label}
                                    </Link>
                                </BreadcrumbLink>
                                <BreadcrumbSeparator />
                            </BreadcrumbItem>

                        </div>
                    )
                )
                } */}

                <BreadcrumbItem>
                    <BreadcrumbLink className='text-black'> {currentPage}</BreadcrumbLink>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    )
}
